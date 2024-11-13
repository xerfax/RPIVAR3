
class TripModel {
    constructor() {
        this.trips = [];
    }

    addTrip(trip) {
        this.trips.push(trip);
    }

    deleteTrip(index) {
        this.trips.splice(index, 1);
    }

    editTrip(index, updatedTrip) {
        this.trips[index] = updatedTrip;
    }

    filterTripsByDate(date, showCompletedOnly) {
        return this.trips.filter(trip => {
            const matchesDate = date ? trip.date === date : true;
            const matchesStatus = showCompletedOnly ? trip.status === 'Completed' : true;
            return matchesDate && matchesStatus;
        });
    }
}

export default TripModel;
