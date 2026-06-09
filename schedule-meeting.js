const dayStart = "07:30";
const dayEnd = "17:45";
const [startHours, startMinutes] = dayStart.split(":")
const start = Number(startHours) * 60 + Number(startMinutes);
const [endHours, endMinutes] = dayEnd.split(":")
const end = Number(endHours) * 60 + Number(endMinutes);

function scheduleMeeting(startTime,durationMinutes) {
    const [hours, minutes] = startTime.split(":");
    const time = Number(hours) * 60 + Number(minutes);
    const result = time >= start && time + durationMinutes <= end;
    console.log(result);
    return result;
}

scheduleMeeting("7:00",15);     // false
scheduleMeeting("07:15",30);    // false
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false