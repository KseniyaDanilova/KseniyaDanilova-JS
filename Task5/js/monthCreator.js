function DatePicker(data) {
    
        let CDay = data.date.getDate();  
        let CMonth = data.date.getMonth();
        let CYear = data.date.getFullYear();

        
        this.create = function () {
            this.getCurrentMonth();
        }
    
        this.getMonthAfter = function () {
            CMonth++;
            if (CMonth > 11) {
                CMonth = 0;
                CYear++;
            }
            return CMonth;
        }
    
        this.getMonthBefore = function () {
            CMonth--;
            if (CMonth < 0) {
                CMonth = 11;
                CYear--;
            }
            return CMonth;
        }
    
        this.getCurrentMonth = function () {
            let monthWeeks = generateMonthWeeks(new Date().getMonth(), new Date().getFullYear());
            render(monthWeeks);
        }
    
        this.getSelectedMonth = function () {
            return CMonth;
        }
    
        this.getCYear = function () {
            return CYear;
        }
    
        this.getMonthArray = function () {
            return MONTH;
        }
    
        this.getDaysArray = function () {
            return DAY;
        }
    
        this.getNumberOfDays = function (month, year) {
            return new Date(year, month + 1, 0).getDate();
        };
    
        this.getFirstDayInMonth = function (month, year) {
            return new Date(year, month, 1).getDay();
        };
    
        this.getWeeksInMonth = function (month, year) {
            let firstDay = this.getFirstDayInMonth(month, year);
            return Math.ceil((this.getNumberOfDays(month, year) + firstDay) / 7);
        }
    
        this.getMonthDayNumbersArray = function (NumberOfDays) {
            let daysNumber = [];
            for (let dayNumber = 1; dayNumber < NumberOfDays + 1; dayNumber++) {
                daysNumber.push(dayNumber);
            }
            return daysNumber[Symbol.iterator]();
        }
    
        this.getCurrentDay = function () {
            return this.getCurrentMonth.getFullYear()
        }
    }