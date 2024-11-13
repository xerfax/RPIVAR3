
import TripModel from './model.js';
import TripView from './view.js';

class TripPresenter {
    constructor() {
        this.model = new TripModel();
        this.view = new TripView();

        this.view.bindAddTrip(this.handleAddTrip);
        this.view.bindDeleteTrip(this.handleDeleteTrip);
        this.view.bindEditTrip(this.handleEditTrip);
        this.view.bindFilterTrips(this.handleFilterTrips);

        this.view.renderTrips(this.model.trips);
    }

    handleAddTrip = (trip) => {
        this.model.addTrip(trip);
        this.updateView();
    }

    handleDeleteTrip = (index) => {
        this.model.deleteTrip(index);
        this.updateView();
    }

    handleEditTrip = (index) => {
        return this.model.trips[index]; 
    }

    handleFilterTrips = () => {
        const date = this.view.dateFilter.value;
        const showCompletedOnly = this.view.completedFilter.checked;
        const filteredTrips = this.model.filterTripsByDate(date, showCompletedOnly);
        this.view.renderTrips(filteredTrips);
    }

    updateView() {
        const filteredTrips = this.model.filterTripsByDate(
            this.view.dateFilter.value,
            this.view.completedFilter.checked
        );
        this.view.renderTrips(filteredTrips);
    }
}

export default TripPresenter;
