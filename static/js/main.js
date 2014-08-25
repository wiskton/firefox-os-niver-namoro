        var resultadoMes = function() {
            var niver = localStorage.getItem('niver');
            data = niver.split('/');
            dia = data[0];
            mes = data[1];
            ano = data[2];
            function totaldifDate(data1, data2) {
                var birthdiaThisYear = new Date(data2.getFullYear(), data1.getMonth(), data1.getDate());
                var ano = data2.getFullYear() - data1.getFullYear();
                if(birthdiaThisYear > data2) {
                    ano--;
                }
                mes = 12-data1.getMonth()+data2.getMonth()+1;
                if ( mes > 12 ){
                    mes = mes - 12;
                } else if( mes == 12 ){
                    ano++;
                    mes = 0;
                }
                if ( mes == 0 ){
                    mes = '';
                } else {
                    if (mes == 1){
                        mes = " e " + mes + " mes";
                    }
                    else {
                        mes = " e " + mes + " meses";
                    }
                }
                if (ano > 1)
                    return ano + " anos" + mes + ' de amor';
                else
                    return ano + " ano" + mes + ' de amor';
            }
            function difDate(data1, data2) {
                return Math.ceil((data1.getTime()-data2.getTime())/1000/60/60/24);
            }
            var df = new Date();
            var df = new Date(df.getFullYear(), df.getMonth(), df.getDate());
            var di = new Date(df.getFullYear(), df.getMonth(), dia);
            var tdi = new Date(ano, mes, dia);
            if ( di < df ) {
                var di = new Date(df.getFullYear(), df.getMonth()+1, dia);
            }
            total_dias = totaldifDate(tdi, df);
            dias = difDate(di, df);
            if ( dias == 0 ) {
                return '0';
            } else {

                if ( dias == 1){
                    dias = dias + " dia";
                } else {
                    dias = dias + " dias";
                }
            }
            return "Faltam " + dias;
        }

        var resultadoAno = function (){
          return "Faltam 10 meses e 5 dias";
        }


