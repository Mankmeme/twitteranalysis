module.exports = {

  index: function(req,res){

    var data = {
      indexHeader: "Our Index Page",
      indexParagraph: "Paragraph stuff."
    }
    res.render('index')
  },

  analyses: function(req, res){
    res.render('analyses')
  },

  watson: function(req, res){
    res.render('watson-test')
  }

}
