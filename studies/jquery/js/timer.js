(function ($) {
    $.fn.timer = function (options) {
        const finalOptions = $.extend({
            message: 'Coming soon',
            schedule: '23:59:59'
        }, options)

        const tensHours = $('<span class="digit">').html('0')
        const unitHours = $('<span class="digit">').html('0')
        const tensMinutes = $('<span class="digit">').html('0')
        const unitMinutes = $('<span class="digit">').html('0')
        const tensSeconds = $('<span class="digit">').html('0')
        const unitSeconds = $('<span class="digit">').html('0')

        const hourSeparator = $('<span class="separator">').html(':')
        const minuteSeparator = $('<span class="separator">').html(':')
        const message = $('<div class="message">').html(finalOptions.message)

        $(this).addClass('timer')
        $(this).append(tensHours, unitHours, hourSeparator, tensMinutes, unitMinutes, minuteSeparator, tensSeconds, unitSeconds, message)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const targetTime = regex.exec(finalOptions.schedule)
        // console.log(targetTime)

        let timer = setInterval(() => {
            const now = new Date()
            const target = new Date()
            target.setHours(targetTime[1])
            target.setMinutes(targetTime[2])
            target.setSeconds(targetTime[3])

            const differenceInMilli = target.getTime() - now.getTime()
            if (differenceInMilli >= 0) {
                const difference = regex.exec(new Date(differenceInMilli).toISOString())
                // console.log(difference)

                tensHours.html(difference[1][0])
                unitHours.html(difference[1][1])
                tensMinutes.html(difference[2][0])
                unitMinutes.html(difference[2][1])
                tensSeconds.html(difference[3][0])
                unitSeconds.html(difference[3][1])
            }else {
                clearInterval(timer)
            }
        }, 1000)

        return this
    }
})(jQuery)