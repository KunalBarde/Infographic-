function clearmainbox()
{
    document.getElementById("mainbox").innerHTML = "";
}

function clearmainwithblowup()
{
    clearmainbox();
    document.getElementById("mainbox").innerHTML = "<span id='timeup'>YOUR TIME IS UP!</span>";
}


function updatebottom(section, demographic)
{
    document.getElementById("demographic").innerHTML = demographic.toUpperCase();
    document.getElementById("timespent").innerHTML = section.data.value;
    document.getElementById("activity").innerHTML = section.data.label.toUpperCase();
}

function replacescreen(data)
{
    clearmainbox();

    var toprow = document.createElement("div");
    toprow.class = "row";
    toprow.id = "trow";
    document.getElementById("mainbox").appendChild(toprow);

    var bottomrow = document.createElement("div");
    bottomrow.class = "row";
    bottomrow.id = "brow";
    document.getElementById("mainbox").appendChild(bottomrow);

    var leftcolumn = document.createElement("div");
    leftcolumn.class = "col-lg-6";
    leftcolumn.id = "leftcolumn";
    document.getElementById("trow").appendChild(leftcolumn);

    var rightcolumn = document.createElement("div");
    rightcolumn.class = "col-lg-6";
    rightcolumn.id = "rightcolumn";
    document.getElementById("trow").appendChild(rightcolumn);

    var canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    var background = new Image();
    background.src = "img/jar.png";
    document.getElementById("rightcolumn").appendChild(canvas);
    background.onload = function()
    {
    	ctx.drawImage(background, 0, 0);
    }

    var chart = document.createElement("div");
    chart.class="piechart";
    chart.id = data;
    document.getElementById("leftcolumn").appendChild(chart);

    document.getElementById("brow").innerHTML = "ON AVERAGE, <span id='demographic'></span> SPEND <span id='timespent'></span> HOURS A DAY ON <span id='activity'></span>."
    
    var pc1 = new d3pie("pc1", {
    "header": {
        "title": {
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasHeight": 400,
        "canvasWidth": 1000,
        "pieInnerRadius": "39%",
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
                "label": "Personal Time",
                "value": 10.71,
                "color": "#2383c1"
            },
            {
                "label": "Food",
                "value": 1.22,
                "color": "#64a61f"
            },
            {
                "label": "Shopping",
                "value": 0.62,
                "color": "#7b6788"
            },
            {
                "label": "Family Time",
                "value": 0.8,
                "color": "#a05c56"
            },
            {
                "label": "Work",
                "value": 4.64,
                "color": "#961919"
            },
            {
                "label": "Education",
                "value": 0.42,
                "color": "#d8d239"
            },
            {
                "label": "Religious Obligations",
                "value": 0.28,
                "color": "#e98125"
            },
            {
                "label": "Leisure",
                "value": 5.59,
                "color": "#d0743c"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "none",
            "pieDistance": 32
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {value} hours, {percentage}% of the day",
        "styles": {
            "font": "helvetica",
            "fontSize": 24
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    },
    "callbacks": {
        onClickSegment: function(a) 
        {
            updatebottom(a, "WHITE MEN");
            dropballs(a);
        }
    }
});

var pc2 = new d3pie("pc2", {
    "header": {
        "title": {
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasHeight": 400,
        "canvasWidth": 1000,
        "pieInnerRadius": "39%",
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
                "label": "Personal Time",
                "value": 12.04,
                "color": "#2383c1"
            },
            {
                "label": "Food",
                "value": 1.19,
                "color": "#64a61f"
            },
            {
                "label": "Shopping",
                "value": 0.89,
                "color": "#7b6788"
            },
            {
                "label": "Family Time",
                "value": 0.71,
                "color": "#a05c56"
            },
            {
                "label": "Work",
                "value": 3.07,
                "color": "#961919"
            },
            {
                "label": "Education",
                "value": 0.54,
                "color": "#d8d239"
            },
            {
                "label": "Religious Obligations",
                "value": 0.35,
                "color": "#e98125"
            },
            {
                "label": "Leisure",
                "value": 4.93,
                "color": "#d0743c"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "none",
            "pieDistance": 32
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {value} hours, {percentage}% of the day",
        "styles": {
            "font": "helvetica",
            "fontSize": 24
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    },
    "callbacks": {
        onClickSegment: function(a) 
        {
            updatebottom(a, "WHITE WOMEN");
            dropballs(a);
        }
    }
});

var pc3 = new d3pie("pc3", {
    "header": {
        "title": {
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasHeight": 400,
        "canvasWidth": 1000,
        "pieInnerRadius": "39%",
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
                "label": "Personal Time",
                "value": 10.92,
                "color": "#2383c1"
            },
            {
                "label": "Food",
                "value": 0.82,
                "color": "#64a61f"
            },
            {
                "label": "Shopping",
                "value": 0.67,
                "color": "#7b6788"
            },
            {
                "label": "Family Time",
                "value": 0.26,
                "color": "#a05c56"
            },
            {
                "label": "Work",
                "value": 3.95,
                "color": "#961919"
            },
            {
                "label": "Education",
                "value": 0.33,
                "color": "#d8d239"
            },
            {
                "label": "Religious Obligations",
                "value": 0.38,
                "color": "#e98125"
            },
            {
                "label": "Leisure",
                "value": 6.45,
                "color": "#d0743c"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "none",
            "pieDistance": 32
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {value} hours, {percentage}% of the day",
        "styles": {
            "font": "helvetica",
            "fontSize": 24
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    },
    "callbacks": {
        onClickSegment: function(a) 
        {
            updatebottom(a, "HISPANIC MEN");
            dropballs(a);
        }
    }
});

var pc4 = new d3pie("pc4", {
    "header": {
        "title": {
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasHeight": 400,
        "canvasWidth": 1000,
        "pieInnerRadius": "39%",
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
                "label": "Personal Time",
                "value": 11.81,
                "color": "#2383c1"
            },
            {
                "label": "Food",
                "value": 0.91,
                "color": "#64a61f"
            },
            {
                "label": "Shopping",
                "value": 0.87,
                "color": "#7b6788"
            },
            {
                "label": "Family Time",
                "value": 0.49,
                "color": "#a05c56"
            },
            {
                "label": "Work",
                "value": 3.44,
                "color": "#961919"
            },
            {
                "label": "Education",
                "value": 0.4,
                "color": "#d8d239"
            },
            {
                "label": "Religious Obligations",
                "value": 0.47,
                "color": "#e98125"
            },
            {
                "label": "Leisure",
                "value": 5.35,
                "color": "#d0743c"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "none",
            "pieDistance": 32
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {value} hours, {percentage}% of the day",
        "styles": {
            "font": "helvetica",
            "fontSize": 24
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    },
    "callbacks": {
        onClickSegment: function(a) 
        {
            updatebottom(a, "HISPANIC WOMEN");
            dropballs(a);
        }
    }
});

var pc5 = new d3pie("pc5", {
    "header": {
        "title": {
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasHeight": 400,
        "canvasWidth": 1000,
        "pieInnerRadius": "39%",
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
                "label": "Personal Time",
                "value": 10.25,
                "color": "#2383c1"
            },
            {
                "label": "Food",
                "value": 1.63,
                "color": "#64a61f"
            },
            {
                "label": "Shopping",
                "value": 0.48,
                "color": "#7b6788"
            },
            {
                "label": "Family Time",
                "value": 0.43,
                "color": "#a05c56"
            },
            {
                "label": "Work",
                "value": 4.69,
                "color": "#961919"
            },
            {
                "label": "Education",
                "value": 1.6,
                "color": "#d8d239"
            },
            {
                "label": "Religious Obligations",
                "value": 0.26,
                "color": "#e98125"
            },
            {
                "label": "Leisure",
                "value": 4.09,
                "color": "#d0743c"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "none",
            "pieDistance": 32
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {value} hours, {percentage}% of the day",
        "styles": {
            "font": "helvetica",
            "fontSize": 24
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    },
    "callbacks": {
        onClickSegment: function(a) 
        {
            updatebottom(a, "BLACK MEN");
            dropballs(a);
        }
    }
});

var pc6 = new d3pie("pc6", {
    "header": {
        "title": {
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasHeight": 400,
        "canvasWidth": 1000,
        "pieInnerRadius": "39%",
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
                "label": "Personal Time",
                "value": 12.1,
                "color": "#2383c1"
            },
            {
                "label": "Food",
                "value": 1.37,
                "color": "#64a61f"
            },
            {
                "label": "Shopping",
                "value": 0.89,
                "color": "#7b6788"
            },
            {
                "label": "Family Time",
                "value": 0.91,
                "color": "#a05c56"
            },
            {
                "label": "Work",
                "value": 3.15,
                "color": "#961919"
            },
            {
                "label": "Education",
                "value": 0.73,
                "color": "#d8d239"
            },
            {
                "label": "Religious Obligations",
                "value": 0.23,
                "color": "#e98125"
            },
            {
                "label": "Leisure",
                "value": 4.35,
                "color": "#d0743c"
            }
        ]
    },
    "labels": {
        "outer": {
            "format": "none",
            "pieDistance": 32
        },
        "inner": {
            "format": "none",
            "hideWhenLessThanPercentage": 3
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": true
        }
    },
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {value} hours, {percentage}% of the day",
        "styles": {
            "font": "helvetica",
            "fontSize": 24
        }
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    },
    "callbacks": {
        onClickSegment: function(a) 
        {
            updatebottom(a, "BLACK WOMEN");
            dropballs(a);
        }
    }
});
}

