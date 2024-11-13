
class TripView {
    constructor() {
        this.tripList = document.getElementById('trip-list');
        this.tripForm = document.getElementById('trip-form');
        this.dateFilter = document.getElementById('date-filter');
        this.completedFilter = document.getElementById('completed-filter');
    }

    bindAddTrip(handler) {
        this.tripForm.addEventListener('submit', event => {
            event.preventDefault();
            const trip = {
                destination: document.getElementById('trip-destination').value,
                date: document.getElementById('trip-date').value,
                notes: document.getElementById('trip-notes').value,
                status: this.tripForm.querySelector('input[name="trip-status"]:checked').value,
            };
            handler(trip);
            this.tripForm.reset();
        });
    }

    bindDeleteTrip(handler) {
        this.tripList.addEventListener('click', event => {
            if (event.target.classList.contains('delete-button')) {
                const index = event.target.dataset.index;
                handler(index);
            }
        });
    }

    bindEditTrip(handler) {
        this.tripList.addEventListener('click', event => {
            if (event.target.classList.contains('edit-button')) {
                const index = event.target.dataset.index;
                const tripData = handler(index); 
                document.getElementById('trip-destination').value = tripData.destination;
                document.getElementById('trip-date').value = tripData.date;
                document.getElementById('trip-notes').value = tripData.notes;
                this.tripForm.querySelector(`input[value="${tripData.status}"]`).checked = true;
            }
        });
    }

    bindFilterTrips(handler) {
        this.dateFilter.addEventListener('input', () => handler());
        this.completedFilter.addEventListener('change', () => handler());
    }

    renderTrips(trips) {
        this.tripList.innerHTML = trips.map((trip, index) => `
            <li>
                <strong>${trip.destination}</strong> — ${trip.date}
                <p>${trip.notes}</p>
                <p>Status: ${trip.status}</p>
                <button class="edit-button" data-index="${index}">Редактировать</button>
                <button class="delete-button" data-index="${index}">Удалить</button>
            </li>
        `).join('');
    }
}

export default TripView;
