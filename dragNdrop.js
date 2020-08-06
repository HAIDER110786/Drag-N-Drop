const fill = document.querySelector('.fill');

document.querySelectorAll('.empty').forEach(emptyDiv => {
    emptyDiv.addEventListener("dragover", (e) => {
        e.preventDefault()
    });
    emptyDiv.addEventListener("dragenter", function (e) {
        e.preventDefault(); this.className += ' hover';
    });
    emptyDiv.addEventListener("dragleave", function () {
        this.className = 'empty';
    });
    emptyDiv.addEventListener("drop", function () {
        this.className = "empty";
        this.appendChild(fill);
    });
})

fill.addEventListener("dragstart", function () { setTimeout(() => { this.style.display = 'none' }, 0) });
fill.addEventListener("dragend", function () { this.style.display = 'block' });

/**VERY IMPORTANT NOTE BELOW DO READ THAT */
/*
to enable drop event we must use preventDefault()function on the over event, now the thing i am assuming is that
drag enter and drag leave are events which are fired on a certain interval but te dragOver event on the other hand
is an event which is not occurred on an interval and hence the page must be refreshed on every interval in
order to know the status of the over event, this refreshing prevents the drop event to occur and rather calls
the leave event, and hence the e.preventDefault() method is a must.........
*/