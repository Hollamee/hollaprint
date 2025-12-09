window.CMS.registerEditorComponent({
  id: "html-block",
  label: "Editable HTML",
  fields: [
    {
      name: "html",
      label: "HTML Content",
      widget: "text"
    }
  ],
  pattern: /^([\s\S]*)$/,
  fromBlock: function(match) {
    return {
      html: match[1]
    };
  },
  toBlock: function(obj) {
    return obj.html;
  },
  toPreview: function(obj) {
    return obj.html;
  }
});