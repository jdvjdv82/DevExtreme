"use strict";

var themeModule = require("../../themes"),
    registerTheme = themeModule.registerTheme,
    ACCENT_COLOR = "#9c63ff",
    BACKGROUND_COLOR = "#17171f",
    TITLE_COLOR = "#f5f6f7",
    SUBTITLE_COLOR = "#fff",
    TEXT_COLOR = "#b2b2b6",
    BORDER_COLOR = "#343840";

registerTheme({
    name: "generic.darkviolet",
    defaultPalette: "Dark Violet",

    backgroundColor: BACKGROUND_COLOR,
    primaryTitleColor: TITLE_COLOR,
    secondaryTitleColor: SUBTITLE_COLOR,
    axisColor: BORDER_COLOR,
    axisLabelColor: TEXT_COLOR,
    "export": {
        backgroundColor: BACKGROUND_COLOR,
        font: {
            color: TITLE_COLOR
        },
        button: {
            "default": {
                color: TITLE_COLOR,
                borderColor: "#414152",
                backgroundColor: BACKGROUND_COLOR
            },
            hover: {
                color: TITLE_COLOR,
                borderColor: "#5c5c74",
                backgroundColor: "#2d2d3c"
            },
            focus: {
                color: TITLE_COLOR,
                borderColor: "#7c7c97",
                backgroundColor: "#2d2d3c"
            },
            active: {
                color: TITLE_COLOR,
                borderColor: "#7c7c97",
                backgroundColor: "#3c3c51"
            }
        }
    },
    legend: {
        font: {
            color: TEXT_COLOR
        }
    },
    tooltip: {
        color: BACKGROUND_COLOR,
        border: {
            color: "#414152"
        },
        font: {
            color: TITLE_COLOR
        }
    },
    "chart:common": {
        commonSeriesSettings: {
            label: {
                border: {
                    color: BORDER_COLOR
                }
            }
        }
    },
    chart: {
        commonPaneSettings: {
            border: {
                color: BORDER_COLOR
            }
        },
        commonAxisSettings: {
            breakStyle: { color: "#575e6b" }
        }
    },
    funnel: {
        item: {
            border: {
                color: BACKGROUND_COLOR
            }
        }
    },
    sparkline: {
        pointColor: BACKGROUND_COLOR
    },
    treeMap: {
        group: {
            color: BORDER_COLOR,
            label: {
                font: {
                    color: SUBTITLE_COLOR
                }
            }
        }
    },
    rangeSelector: {
        shutter: {
            color: BACKGROUND_COLOR
        },
        scale: {
            breakStyle: { color: "#575e6b" },
            tick: {
                opacity: 0.2
            }
        },
        selectedRangeColor: ACCENT_COLOR,
        sliderMarker: {
            color: ACCENT_COLOR,
            font: {
                color: "#fff"
            }
        },
        sliderHandle: {
            color: ACCENT_COLOR,
            opacity: 0.5
        }
    },
    map: {
        "layer:marker:dot": {
            color: ACCENT_COLOR
        },
        "layer:marker:bubble": {
            color: ACCENT_COLOR
        },
        legend: {
            markerColor: ACCENT_COLOR
        }
    }
}, "generic.dark");
