(function() {

  window.plugins.pagefold = {
    emit: function(div, item) {
      return div.append("<div style=\"height: 10px; border-top: 2px solid lightgray; margin-top: 24px; text-align: center; position: relative; \">\n	<span style=\"position: relative; top: -.8em; background: white; display: inline-block; color: gray; \">\n		&nbsp; " + item.text + " &nbsp;\n	</span>\n</div>");
    },
    bind: function(div, item) {
      return div.dblclick(function() {
        return wiki.textEditor(div, item);
      });
    }
  };

}).call(this);
