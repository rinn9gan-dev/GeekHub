document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    input.addEventListener('paste', (e) => {
        e.preventDefault();

        const string = e.clipboardData.getData('text/plain');
        const input = e.currentTarget;

        const csv = new Csv();
        const arrayText = csv.parse(string);

        console.log(arrayText);
    })

    class Csv {
        parse(string, strictSeparator) {
            const splitByLines = string.split('\n');
            const separator = strictSeparator || this.getSeparator(splitByLines[0], splitByLines[splitByLines.length - 1]);
            return splitByLines.map(line => line.split(separator));
        }

        getSeparator(firstLine, lastLine) {
            const separator1 = ',';
            const separator2 = ';';
            const separator3 = '\t';
            const separator4 = '';

            const firstLineSeparator1Count = firstLine.split(separator1).length - 1;
            const lastLineSeparator1Count = lastLine.split(separator1).length - 1;

            if (firstLineSeparator1Count > 0 && firstLineSeparator1Count === lastLineSeparator1Count) {
                return separator1;
            }

            const firstLineSeparator2Count = firstLine.split(separator2).length - 1;
            const lastLineSeparator2Count = lastLine.split(separator2).length - 1;

            if (firstLineSeparator2Count > 0 && firstLineSeparator2Count === lastLineSeparator2Count) {
                return separator2;
            }

            const firstLineSeparator3Count = firstLine.split(separator3).length - 1;
            const lastLineSeparator3Count = lastLine.split(separator3).length - 1;

            if (firstLineSeparator3Count > 0 && firstLineSeparator3Count === lastLineSeparator3Count) {
                return separator3;
            }

            return separator4;
        }
    }
})
