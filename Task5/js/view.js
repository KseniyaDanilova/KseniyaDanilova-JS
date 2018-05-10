

(function () {
    let datepicker = new DatePicker({
        date: new Date()
        
       
    });
    let wrapper = document.querySelector(".calendar__content");
    let dp = new DP();
    
    
    dp.setdpView({
      
        datepicker: {
            content: "calendar__content"
        },
        CalendarTitle: {
            content: "calendar__title-content",
            title: "calendar__title",
            leftButton: "calendar__button calendar__button_left",
            rightButton: "calendar__button calendar__button_right"
        },
        CalendarDay: {
            content: "calendar__heading",
            day: "calendar__day"
        },
        CalendarWeek: {
            content: "calendar__weeks-content",
            week: "calendar__week",
            day: "calendar__week_day"
        }
    });
    Render.render(wrapper, datepicker, dp);
})();