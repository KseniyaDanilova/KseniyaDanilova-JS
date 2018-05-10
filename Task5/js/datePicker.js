

const DAY = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



function DP() {

    let dpView = {};
    let dpcontent = null;
    let CDay = 0;
    let CMonth = 0;
    let CYear = 0
    let months = 0;
    let days = 0;
    let datepicker = {};

    this.setdpView = function (view) {
        dpView = view;
    }

    this.generate = function (dpg) {
        datepicker = dpg;

        CYear = datepicker.getCYear();
        months = datepicker.getMonthArray();
        days = datepicker.getDaysArray();
        CMonth = datepicker.getSelectedMonth();

        dpcontent = document.createElement("div");
        dpcontent.className = dpView.datepicker.content;
        dpcontent.appendChild(generateCalendarTitle());
        dpcontent.appendChild(createNameOfWeeks());
        dpcontent.appendChild(createCalendarWeek(CMonth, CYear));

        return dpcontent;
    }

    function createNameOfWeeks() {
        let CalendarDay = document.createElement("div");
        CalendarDay.className = dpView.CalendarDay.content;

        for (let day of days) {
            let dayName = document.createElement("span");
            dayName.className = dpView.CalendarDay.day;
            dayName.innerText = day;
            CalendarDay.appendChild(dayName);
        }
        return CalendarDay;
    }

    function generateCalendarTitle() {
        let CalendarTitle = null;
        CalendarTitle = document.createElement("div");
        CalendarTitle.className = dpView.CalendarTitle.content;

        let leftButton = document.createElement("span");
        leftButton.className = dpView.CalendarTitle.leftButton;
        CalendarTitle.appendChild(leftButton);
        leftButton.addEventListener("click", function () {
            CMonth = datepicker.getMonthBefore();
            CYear = datepicker.getCYear();
            let CalendarWeek = createCalendarWeek(CMonth, CYear);
            changeCalendarWeek(CalendarWeek);
        });

        let title = document.createElement("span");
        title.innerText = months[CDay] + ", " + CYear;
        title.className = dpView.CalendarTitle.title;
        CalendarTitle.appendChild(title);

        let rightButton = document.createElement("span");
        rightButton.className = dpView.CalendarTitle.rightButton;
        CalendarTitle.appendChild(rightButton);
        rightButton.addEventListener("click", function () {
            CMonth = datepicker.getMonthAfter();
            CYear = datepicker.getCYear();
            let CalendarWeek = createCalendarWeek(CMonth, CYear);
            changeCalendarWeek(CalendarWeek);
        });
        return CalendarTitle;
    }

    function changeCalendarWeek(CalendarWeek) {
        if (isCalendarWeekExist()) {
            document.querySelector("." + dpView.CalendarWeek.content).remove();
            dpcontent.appendChild(CalendarWeek);
        } else {
            dpcontent.appendChild(CalendarWeek);
        }
    }

    function isCalendarWeekExist() {
        return document.querySelector("." + dpView.CalendarWeek.content) != null ? true : false;
    }

    function createCalendarWeek(monthNumber, year) {
        let NumberOfDays = datepicker.getNumberOfDays(monthNumber, year);
        let firstDayInMonth = datepicker.getFirstDayInMonth(monthNumber, year);
        let firstDayInWeek = firstDayInMonth;
        let weeksInMonth = datepicker.getWeeksInMonth(monthNumber, year);

        let datepickerWeeks = document.createElement("div");
        datepickerWeeks.className = dpView.CalendarWeek.content;
        dpcontent.querySelector("." + dpView.CalendarTitle.title).innerText = months[monthNumber] + " " + year;

        let daysNumber = datepicker.getMonthDayNumbersArray(NumberOfDays);
        for (let weekNumber = 0; weekNumber < weeksInMonth; weekNumber++) {
            addWeek(datepickerWeeks, weekNumber, daysNumber, firstDayInWeek);
            firstDayInWeek = 0;
        }
        return datepickerWeeks;
    }

    function addWeek(datepickerWeeks, weekNumber, daysNumber, firstDayInWeek) {
        let week = document.createElement("div");
        week.className = "" + dpView.CalendarWeek.week;
        for (let dayNumber = 0; dayNumber < days.length; dayNumber++) {
            let day = document.createElement("span");
            day.className = dpView.CalendarWeek.day;
            if (dayNumber >= firstDayInWeek) {
                day.textContent = daysNumber.next().value || "";
            }
            if(day.textContent ==""){
                day.style.visibility ="hidden";
            }
            week.appendChild(day);
        }
        datepickerWeeks.appendChild(week);
    }
}

