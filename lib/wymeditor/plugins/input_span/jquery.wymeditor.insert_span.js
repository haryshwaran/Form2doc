/*jslint evil: true */
/**
    WYMeditor.alignment
    ====================

    A plugin to add a class to a container which can be used to set the alignment
	for it.
	
	by Patabugen ( patabugen.co.uk )
*/

WYMeditor.editor.prototype.insert_span = function () {
    var wym = this,
		$box = jQuery(this._box);
		
	options = {
		
	}

	//construct the buttons' html
    var button_insertVar = String() +
        "<li class='wym_tools_insert_span'>" +
            "<a name='InsertVar' href='#'>" +
                "<span class='glyphicon glyphicon-edit'></span>" +
            "</a>" +
        "</li>";
		
	var html = button_insertVar;
    //add the button to the tools box
    $box.find(wym._options.toolsSelector + wym._options.toolsListSelector)
        .append(html);
  
    var isContainerValid = function (){
      
        console.log(wym.selectedContainer() )

      
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
        return true
    }
		
    $box.find('li.wym_tools_insert_span a').click(function() {
		if(isContainerValid()){
        jQuery('#myModal').modal('show')  
		//wym.insert("<span class='variable hide-preview' id='var-'>$Name</span>");
        }
		return false;
	});
};