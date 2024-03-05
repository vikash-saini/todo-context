import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventGrps: [],
    };
  }
  componentDidMount() {
    this.getApplMenu();
  }
  async getApplMenu() {
    let newArr = this.props.data.refDataObjList.map((row) => {
      row["subApplList"] = this.props.data.subApplList?.filter(
        (obj) => obj.applicationId == row.applicationId
      );
      row["subApplList"]?.map((obj) => {
        obj["applEvents"] = row.applEvents.filter(
          (obj1) => obj1.subApplEventId == obj.subApplId
        );
        obj["collapsed"] = true;
      });
      return row;
    });

    console.log("newArr", newArr);
    this.setState({ eventGrps: newArr });
  }

  updateTabs = (id) => {
    let eventGrps = this.state.eventGrps;
    let newtabs = eventGrps.map((event, index) => {
      if (event.priId == id) {
        event.collapsed = !event.collapsed;
      } else {
        event.collapsed = true;
      }
      return event;
    });
    return newtabs;
  };

  handletabClick = (id) => {
    // alert(id);
    this.setState({ eventGrps: this.updateTabs(id), management: "" });
  };

  updateSubTabs = (id) => {
    console.log(id);
    let eventGrps = this.state.eventGrps[0].subApplList;
    let newtabs = eventGrps.map((event, index) => {
      if (event.priId == id) {
        event.collapsed = !event.collapsed;
      } else {
        event.collapsed = true;
      }
      return event;
    });
    return newtabs;
  };

  handleSubtabClick = (id) => {
    let { eventGrps } = this.state;
    eventGrps[0]["subApplList"] = this.updateSubTabs(id);
    // alert(id);
    this.setState({ eventGrps: eventGrps, management: "" });
  };

  async contentClick(contentObj) {
    console.log(contentObj);
  }

  render() {
    console.log(this.state.eventGrps);
    const eventGrpArr = this.state.eventGrps;
    return (
      <>
        <div>Accordian</div>

        <div
          className="left-panel-accordion"
          style={{
            width: "20%",
            backgroundColor: "#6839da",
            borderRight: "0.5px solid black",
          }}
        >
          <div className="accDiv">
            <div id="accordion">
              <div style={{ paddingTop: "35px" }}></div>
              {eventGrpArr &&
                eventGrpArr.map((event, index) => {
                  event.applEvents = event.applEvents?.sort(this.compare);
                  return (
                    <>
                      <SubAccordion
                        key={index}
                        handleclick={this.handletabClick}
                        title={event.eventGrpName}
                        collapsed={event.collapsed}
                        titleId={event.priId}
                        subContent={
                          event.subApplList &&
                          event.subApplList.map((sub, i) => {
                            return (
                              <>
                                <SubAccordion
                                  key={i}
                                  handleclick={this.handleSubtabClick}
                                  title={sub.subApplDisplayName}
                                  collapsed={sub.collapsed}
                                  titleId={sub.priId}
                                  content={Object.keys(sub.applEvents).map(
                                    (item, j) => {
                                      if (
                                        sub.applEvents[item].subApplEventId !==
                                        null
                                      ) {
                                        return (
                                          <Button
                                            className="cont-btn leftPanelSubMenu"
                                            onClick={() =>
                                              this.contentClick(
                                                sub.applEvents[item]
                                              )
                                            }
                                          >
                                            {
                                              sub.applEvents[item]
                                                .eventDisplayName
                                            }{" "}
                                          </Button>
                                        );
                                      }
                                    }
                                  )}
                                />
                              </>
                            );
                          })
                        }
                        content={Object.keys(event.applEvents).map(
                          (item, i) => {
                            if (event.applEvents[item].subApplEventId == null) {
                              return (
                                <Button
                                  className="cont-btn leftPanelSubMenu"
                                  onClick={() =>
                                    this.contentClick(event.applEvents[item])
                                  }
                                >
                                  {event.applEvents[item].eventDisplayName}{" "}
                                </Button>
                              );
                            }
                          }
                        )}
                      />
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

class SubAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // queryBuilderForm:this.props.queryBuilderForm,
    };
  }

  render() {
    return (
      <>
        <div className="tab">
          <div
            className="title flex jc-btwn"
            onClick={() => {
              this.props.handleclick(this.props.titleId);
            }}
          >
            <div className="title flex jc-btwn">
              <span style={{ fontWeight: "700", fontFamily: "sans-serif" }}>
                {this.props.title}
                <span className="accordion-icon">
                  {this.props.collapsed ? "+" : "-"}
                </span>
              </span>
            </div>
          </div>
          <div className="expand">
            <div
              className={this.props.collapsed ? "content hide" : "content show"}
            >
              <div>{this.props.content}</div>
              <div>{this.props.subContent}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
