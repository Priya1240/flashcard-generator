var ClozeCard = function(text, cloze) {

    this.text = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...");
    this.fullText = this.text;
    	
    }

module.exports = ClozeCard;


