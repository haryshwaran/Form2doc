/*jslint evil: true */
/**
    WYMeditor.insert_span
    ====================

    A plugin to add a span tag to a container which can be used to generate forms
	
	by Haryshwaran 
    
    */

WYMeditor.editor.prototype.form_controls = function () {
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
  
  //Load modal dialog into body tag
    $.get("/lib/wymeditor/plugins/input_span/variable_form.html", function( data ) {
      $('body').append( data );
      $('#doc-form-field').submit( function () {
        handleSubmit();
        $('#myModal').modal('hide');
        jsonForms();
      });
    });
  
    var handleSubmit = function () {
      var $inputs = $('#doc-form-field :input');

      // not sure if you wanted this, but I thought I'd add it.
      // get an associative array of just the values.
      var values = {};
      $inputs.each(function() {
        values[$(this).attr('id')] = $(this).val();
        console.log($(this).val());
      });
      console.log(values);
      
      
      wym.insert("<span class='variable hide-preview' id='var-" + values['inputName']+ "'>$" + values['inputName'] +"</span>");
      
      
      //reset the form here.
    };
  
    var jsonForms = function () {
      console.log($('.variable'))
    };
  
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
		
    $box.find('li.wym_tools_insert_span a').click(function() {
		if(isContainerValid()){
        jQuery('#myModal').modal('show')  
        }
		return false;
	});
  
    
};