
noPreschool = new Mongo.Collection("noPreschool");
percentData = noPreschool.find({DataFormat: "Percent", TimeFrame: "2007-2009"});

if (Meteor.isClient) {
  percentFormat = d3.format("%")
  function tooltipHtml(n, state){ /* function to create html content string in tooltip div. */
   dataPercent = percentFormat(state.Data)
    return "<h4>"+n+"</h4><table>"+
      "<tr><td>"+dataPercent+"</td></tr>"+
      "</table>";
  }

Meteor.subscribe("noPreschool");

stateData = {}

Meteor.subscribe("data", function(d){
  allStates = percentData.fetch()
  highState = d3.max(allStates, function(state) {return state.Data})
  lowState = d3.min(allStates, function(state) {return state.Data})
	allStates.map(function(state) {
    state.color=d3.interpolate("#DFEDF5", "#032130")((state.Data-lowState)/(highState-lowState));
    stateData[state.Location]=state
  })
  uStates.draw("#statesvg", stateData, tooltipHtml);
})


percentData.fetch().forEach(function(d) {
   return console.log(d)
  //var low=Math.round(100*Math.random()), 
        //mid=Math.round(100*Math.random()), 
        //high=Math.round(100*Math.random());
      //sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
          //avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffcc", "#800026")(low/100)}; 

});

}

if (Meteor.isServer) {


  Meteor.startup(function () {
      // code to run on server at startup
      Meteor.publish("data", function () {
	  return percentData;
      });
  });
}

