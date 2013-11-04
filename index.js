// Finds the offset position of an element
// very much like the jquery.offset() but
// you know, without jquery

// based on http://www.quirksmode.org/js/findpos.html


module.exports = function(element) {
  var offset = {
    top: 0,
    left: 0
  }
  // check if we support offsetParent
  if (element.offsetParent) {

    do {
      offset.top += element.offsetTop;
      offset.left += element.offsetLeft;
    } while (element = element.offsetParent);

  }
  
  return offset;

}