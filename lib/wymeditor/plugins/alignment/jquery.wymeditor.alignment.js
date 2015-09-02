/*jslint evil: true */
/**
    WYMeditor.alignment
    ====================

    A plugin to add a class to a container which can be used to set the alignment
	for it.
	
	by Patabugen ( patabugen.co.uk )
*/

WYMeditor.editor.prototype.alignment = function () {
    var wym = this,
		$box = jQuery(this._box);
		
	options = {
		
	}

	//construct the buttons' html
    var button_left = String() +
        "<li class='wym_tools_alignment_left'>" +
            "<a name='AlignLeft' href='#' " +
                "style='background-image: url(" +
                    wym._options.basePath +
                    "plugins/alignment/icons.png)'>" +
                "{left}" +
            "</a>" +
        "</li>";
    var button_center = String() +
        "<li class='wym_tools_alignment_center'>" +
            "<a name='AlignCenter' href='#' " +
                "style='background-image: url(" +
                    wym._options.basePath +
                    "plugins/alignment/icons.png); background-position: 0px -24px'>" +
                "{Center}" +
            "</a>" +
        "</li>";
    var button_right = String() +
        "<li class='wym_tools_alignment_right'>" +
            "<a name='AlignRight' href='#' " +
                "style='background-image: url(" +
                    wym._options.basePath +
                    "plugins/alignment/icons.png); background-position: 0px -48px'>" +
                "{right}" +
            "</a>" +
        "</li>";
    var button_justify = String() +
        "<li class='wym_tools_alignment_justify'>" +
            "<a name='AlignJustify' href='#' " +
                "style='background-image: url(" +
                    wym._options.basePath +
                    "plugins/alignment/icons.png); background-position: 0px -72px'>" +
                "{justify}" +
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
        return true
    }
		
    $box.find('li.wym_tools_alignment_left a').click(function() {
		if(isContainerValid()){
		$(wym.selectedContainer()).removeClass('text-center text-left text-right text-justify');
		$(wym.selectedContainer()).addClass('text-left');
        }
		return false;
	});
    $box.find('li.wym_tools_alignment_center a').click(function() {
		if(isContainerValid()){
		$(wym.selectedContainer()).removeClass('text-center text-left text-right text-justify');
		$(wym.selectedContainer()).addClass('text-center');
		return false;
        }
	});
    $box.find('li.wym_tools_alignment_right a').click(function() {
		if(isContainerValid()){
		$(wym.selectedContainer()).removeClass('text-center text-left text-right text-justify');
		$(wym.selectedContainer()).addClass('text-right');
		return false;
        }
	});
    $box.find('li.wym_tools_alignment_justify a').click(function() {
        if(isContainerValid()){
		$(wym.selectedContainer()).removeClass('text-center text-left text-right text-justify');
		$(wym.selectedContainer()).addClass('text-justify');
		return false;
        }
	});
};