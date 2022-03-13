const React = require("react")
const Layout = require("./src/components/layout")

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)

  var tstmenuframe = document.getElementById("tst-app");
  if(tstmenuframe){
    tstmenuframe.classList.add("tst-active")
    tstmenuframe.style.opacity = 0;

    setTimeout(function() {
      tstmenuframe.style.opacity = 1;
    }, 0);
  };



}

exports.onClientEntry = () => {
  console.log("We've started!")
}
