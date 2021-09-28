let highlightLines = async function() {
    console.log("Connections are getting highlighted, please wait...");
    let selectedObjects = await miro.board.selection.get()
    let linesTo = [];
    let linesFrom = [];
    console.log(selectedObjects)
    if (selectedObjects.length > 0) {
        for (const object in selectedObjects) {
            let objectId = selectedObjects[object].id;
            let linesToTemp = await miro.board.widgets.get({ type: 'line', endWidgetId: objectId });
            let linesFromTemp = await miro.board.widgets.get({ type: 'line', startWidgetId: objectId });
            linesToTemp.forEach(line => {
                linesTo.push(line)
            })
            linesFromTemp.forEach(line => {
                linesFrom.push(line)
            })
        }
        if (linesFrom.length > 0) {
            console.log(linesFrom.length + " lines from objects")
            for (const line in linesFrom) {
                linesFrom[line].clientVisible = true
                linesFrom[line].style = { 'lineColor': '#8fd14f', 'lineThickness': 5 }
            }
            await miro.board.widgets.bringForward(linesFrom)
            await miro.board.widgets.update(linesFrom)
        } else {
            console.log("No lines from objects")
        }
        if (linesTo.length > 0) {
            console.log(linesTo.length + " lines to objects")
            for (const line in linesTo) {
                linesTo[line].clientVisible = true
                linesTo[line].style = { 'lineColor': '#f24726', 'lineThickness': 5 }
            }
            await miro.board.widgets.bringForward(linesTo)
            await miro.board.widgets.update(linesTo)
        } else {
            console.log("No lines to objects")
        }
    } else {
        console.log("No component selected")
    }

}
let resetLines = async function() {
    console.log("Highlighting will be resetted, please wait...");
    let lines = await miro.board.widgets.get({ type: 'line', clientVisible: true });
    lines.forEach(line => {
        line.style = { 'lineColor': '#808080', 'lineThickness': 1 }
        line.clientVisible = false
    })
    miro.board.widgets.sendBackward(lines)
    miro.board.widgets.update(lines)
}