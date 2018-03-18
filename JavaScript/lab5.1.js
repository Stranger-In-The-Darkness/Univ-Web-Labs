function onSelectionChanged() {
    if (document.getElementById('select').options.selectedIndex !== 0) {
        document.getElementById('btn').disabled = false;
    }
}