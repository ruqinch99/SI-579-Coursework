const tl = document.querySelector("#task_list");
const descrInput = document.querySelector("input#task_description_input");
const dueDateInput = document.querySelector("input#duedate_input");
const dueTimeInput = document.querySelector("input#duetime_input");
dueDateInput.value = "";
dueTimeInput.value = "";

function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
	const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
	const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time
	if (dueDate && dueTime) { // The user specified both a due date & due time
		//Add the timezone offset to account for the fact that timestamps are specified by UTC
		const timezoneOffset = (new Date()).getTimezoneOffset() * 60 * 1000;
		return dueDate + dueTime + timezoneOffset;
	} else {
		// if the user did not specify both a due date and due time, return false
		return false;
	}
}

function addTask(description, dueTime = "") {
	const li = document.createElement("li");
	tl.appendChild(li);
	if (dueTime != "") {
		li.innerHTML = `${description} <span class="due">due ${new Date(dueTime).toLocaleString()}</span><button class="btn btn-sm btn-outline-danger done" type="button">Done</button>`
	} else {
		li.innerHTML = `${description}<button class="btn btn-sm btn-outline-danger done" type="button">Done</button>`
	};
	li.querySelector(".btn").addEventListener("click", () => {
		li.remove();
	});
};
addTask("Learn to wrap gifts", 1639944400000);
addTask("Buy milk");
document.querySelector("#add_task").addEventListener("click", () => {
	let dueTime = dateAndTimeToTimestamp(dueDateInput, dueTimeInput);
	addTask(descrInput.value, dueTime);
	descrInput.value = "";
	dueDateInput.value = "";
	dueTimeInput.value = "";
	dueTime.value = "";
});
document.addEventListener("keydown", event => {
	if (event.keyCode === 13) {
		let dueTime = dateAndTimeToTimestamp(dueDateInput, dueTimeInput);
		addTask(descrInput.value, dueTime);
		descrInput.value = "";
		dueDateInput.value = "";
		dueTimeInput.value = "";
		dueTime.value = "";
	}
});