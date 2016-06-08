< script type = "text/javascript" >
    function changeText(val) {
        var para = document.getElementbyID('para').innerHTML;
        if (val == 1) {
            para += "Image One was Clicked";
        } else if (val == 2) {
            para += "Image Two was Clicked";
        }
    } < /script>