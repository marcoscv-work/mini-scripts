A = window.A || (window.AUI && window.AUI());
window.toggleVerticalGrid = function(){
  verticalGridNode = A.one('#verticalGrid');
  if (verticalGridNode){
  	verticalGridNode.remove();
  }
  else {
  	A.getBody().prepend('<div id="verticalGrid" style="position:absolute;top:0;left:0;right:0;bottom:0px;z-index:9999;background:url(https://cdn.rawgit.com/marcoscv-work/mini-scripts/master/img/4xGridBlue.png)"></div>');
	var bodyHeight = A.getBody().height();
	if (bodyHeight == undefined) {
		bodyHeight = document.body.clientHeight;
	}
	verticalGridNode = A.one('#verticalGrid');
	verticalGridNode.setStyle('min-height', bodyHeight);
  }
};
window.toggleVerticalGrid();