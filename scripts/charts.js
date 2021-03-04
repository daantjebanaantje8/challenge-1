// font type en kleur instellen
Chart.defaults.global.defaultFontFamily = 'din-condensed';
Chart.defaults.global.defaultFontColor = '#F7F7F7';

// horizontale bar chart voor de totale afstand afgelegd tussen aarde en mars
var ctx = document.getElementById('horizontalBar').getContext('2d');
var chart = new Chart(ctx, {
    type: 'horizontalBar',

    data: {
        // y-axis labels
        labels: ['Hoe ver wij zijn', 'Nog te gaan'],
        datasets: [{
            label: 'Afstand (in miljoenen)',
            // data zorgt zelf voor x-axis labels
            data: [14, 56],
            backgroundColor: [
                '#73E287',
                '#E89653']
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    // zodat de x-axis bij 0 begint ipv 10
                    beginAtZero: true
                }
            }]
        }
    }
});

// line chart voor de energie verbruik over tijd in dit geval maanden. ja ze zijn stipt in januari vertrokken
var ctx = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Juni', 'Juli'],
        datasets: [{
            label: 'Energie verbruik over tijd',
            backgroundColor: '#E2E2E2',
            data: [40, 20, 60, 80, 30, 30, 40]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// bar chart voor de voorraden op het schip
var ctx = document.getElementById('barChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['Groente', 'Fruit', 'Vlees', 'Water', 'Bier'],
        datasets: [{
            label: 'Voorraad',
            data: [80, 80, 30, 80, 10,],
            // per bar een andere kleur
            backgroundColor: [
                '#1DE141',
                '#F0DE0E',
                '#F0420E',
                '#0EF0E5',
                '#F0A90E']
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});