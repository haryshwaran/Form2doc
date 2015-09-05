/*jslint evil: true */
/**
    WYMeditor.alignment
    ====================

    A plugin to add a class to a container which can be used to set the alignment
	for it.
	
	by Haryshwaran
*/

WYMeditor.editor.prototype.alignment = function () {
  var wym = this,
      $box = jQuery(this._box);
		
  options = {

  };

  //construct the buttons' html
  var button_left = String() +
      "<li class='wym_alignment_tools' id='wym_align_left'>" +
          "<a name='AlignLeft' href='#'>" +
                    '<span class="glyphicon glyphicon-align-left"></span>' +
          "</a>" +
      "</li>",
      button_center = String() +
      "<li class='wym_alignment_tools' id='wym_align_center'>" +
          "<a name='AlignCenter' href='#'>" +
                    '<span class="glyphicon glyphicon-align-center"></span>' +
          "</a>" +
      "</li>",
      button_right = String() +
      "<li class='wym_alignment_tools' id='wym_align_right'>" +
          "<a name='AlignRight' href='#'>" +
                    '<span class="glyphicon glyphicon-align-right"></span>' +
          "</a>" +
      "</li>",
      button_justify = String() +
      "<li class='wym_alignment_tools' id='wym_align_justify'>" +
          "<a name='AlignJustify' href='#'>" +
                    '<span class="glyphicon glyphicon-align-justify"></span>' +
          "</a>" +
      "</li>";

  var html = button_left + button_center + button_right + button_justify;
  //add the button to the tools box
  $box.find(wym._options.toolsSelector + wym._options.toolsListSelector)
      .append(html);

  var isContainerValid = function (){      
    if (wym.selectedContainer() === false) {
        return false;
    }
    
    if (
        wym.selectedContainer() === wym.body() &&
        // These are the two commands that are allowed directly in the body.
        cmd !== WYMeditor.EXEC_COMMANDS.INSERT_IMAGE &&
        cmd !== WYMeditor.EXEC_COMMANDS.FORMAT_BLOCK
    ) {
        return false;
    }
    if(wym.selectedContainer().nodeName === 'P'){
      return true
    }
      
    return false
  }

  var getValidContainer = function (currentNode) {    
    var nodeParent = currentNode.parentNode;
    //console.log("current " + currentNode.nodeName + "  parent " + nodeParent.nodeName);

    if(nodeParent.nodeName === 'P'){
      console.log("returning node parent P");
      console.log(nodeParent)
      return nodeParent;
    } 
    else{
      if(nodeParent.nodeName === 'BODY'){
        console.log("returning empty")
        return {};
      }
      return getValidContainer(nodeParent);
    }
  }

  $box.find('li.wym_alignment_tools').click( function () {

    var validContainer = isContainerValid() ? wym.selectedContainer() : (getValidContainer(wym.selectedContainer()));

    switch($(this).attr('id')){
      case 'wym_align_left':
        validContainer.className = 'text-left';
        break;
      case 'wym_align_right':
        validContainer.className = 'text-right';
        break;
      case 'wym_align_center':
        validContainer.className = 'text-center';
        break;
      case 'wym_align_justify':
        validContainer.className = 'text-justify';
        break;
      default:
        return false;
    }
    return false;
  });

};