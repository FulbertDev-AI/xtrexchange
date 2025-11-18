window.onload = function() {
            document.getElementById('to-currency').innerHTML = document.getElementById('from-currency').innerHTML;
        };
        function convertCurrency() {
            const amountEl = document.getElementById('amount');
            const amount = parseFloat(amountEl.value);
            const fromCurrency = document.getElementById('from-currency').value;
            const toCurrency = document.getElementById('to-currency').value;
            const resultEl = document.getElementById('result');

            if (isNaN(amount) || amount < 0) {
                resultEl.textContent = 'Veuillez entrer un montant valide.';
                return;
            }
            const rates = {
                'EUR': { 'USD': 1.12, 'GBP': 0.86, 'CHF': 1.08, 'XOF': 655.957, 'XAF': 655.957 },
                'USD': { 'EUR': 0.89, 'GBP': 0.77, 'CHF': 0.96, 'XOF': 584.98, 'XAF': 584.98 },
                'GBP': { 'EUR': 1.16, 'USD': 1.30, 'CHF': 1.25, 'XOF': 760.00, 'XAF': 760.00 },
                'CHF': { 'EUR': 0.93, 'USD': 1.04, 'GBP': 0.80, 'XOF': 610.00, 'XAF': 610.00 },
                'XOF': { 'EUR': 0.001524, 'USD': 0.00171, 'GBP': 0.00132, 'CHF': 0.00164, 'XAF': 1 },
                'XAF': { 'EUR': 0.001524, 'USD': 0.00171, 'GBP': 0.00132, 'CHF': 0.00164, 'XOF': 1 }
            };
            let result;
            if (fromCurrency === toCurrency) {
                result = amount;
            } else {
                const rate = rates[fromCurrency] && rates[fromCurrency][toCurrency];
                if (!rate) {
                    resultEl.textContent = 'Taux de change non disponible pour cette paire pour le moment.';
                    return;
                }
                result = amount * rate;
            }

            resultEl.textContent = `${amount} ${fromCurrency} = ${result.toLocaleString('fr-FR', {maximumFractionDigits: 2})} ${toCurrency}`;
        }