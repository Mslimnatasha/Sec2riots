// script.js

// Make elements draggable
const riots = document.querySelectorAll('.riot');
const years = document.querySelectorAll('.year-box');
const causes = document.querySelectorAll('.cause');
const causeMatching = document.querySelectorAll('.riot-cause');

// Handle drag start event for riots and causes
riots.forEach(riot => {
    riot.setAttribute('draggable', true);
    riot.addEventListener('dragstart', dragStart);
});

causes.forEach(cause => {
    cause.setAttribute('draggable', true);
    cause.addEventListener('dragstart', dragStart);
});

// Handle drag events for year boxes and cause matching boxes
years.forEach(year => {
    year.addEventListener('dragover', dragOver);
    year.addEventListener('drop', drop);
});

causeMatching.forEach(causeBox => {
    causeBox.addEventListener('dragover', dragOver);
    causeBox.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    const draggedElement = document.getElementById(e.dataTransfer.getData('text'));
    e.target.appendChild(draggedElement);
}

// Screenshot Prompt Button
document.getElementById('submitBtn').addEventListener('click', () => {
    alert('Take a screenshot of your answers and upload to Padlet!');
});
