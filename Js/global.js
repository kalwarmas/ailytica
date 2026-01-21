var GlobalJs = function () {


    return {
         validateElem: function (elem) {
            var isValid = false;
            if ((elem.val() === '' && elem.text() === '') || elem.val() < 0 || elem.val() === undefined) {
                this.highlighInput(elem, true);
            }
            else {
                isValid = true;
                this.highlighInput(elem, false);
            }
            return isValid;
        },
        highlighInput: function (field, highlight) {
            if (highlight) {
                field.css('border', '1px solid #E38898');
            }
            else {
                field.css('border', '1px solid #ced4da');
            }
        }

    };
}();
 