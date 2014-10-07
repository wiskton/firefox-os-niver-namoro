        screen.mozLockOrientation("portrait-primary");

        var totaldifDate = function (data1, data2) {
            var birthdiaThisYear = new Date(data2.getFullYear(), data1.getMonth(), data1.getDate());
            var ano = data2.getFullYear() - data1.getFullYear();
            if(birthdiaThisYear > data2 ) {
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
                    mes = mes + " mês";
                }
                else {
                    mes = mes + " meses";
                }
            }
            if ( ano == 0 ) {
                return mes;
            } else {
                if (ano > 1)
                    return ano + " anos e " + mes + '';
                else
                    return ano + " ano e " + mes + '';
            }
        }

        var quantidade_meses_que_faltam = function (data1, data2) {
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

            mes = 12 - mes;
            return mes;
        }


        var difDate = function (data1, data2) {
            return Math.ceil((data1.getTime()-data2.getTime())/1000/60/60/24);
        }

        var resultadoMes = function() {
            var niver = localStorage.getItem('niver');
            data = niver.split('/');
            dia = data[0];
            mes = data[1];
            ano = data[2];
            var df = new Date();
            var df = new Date(df.getFullYear(), df.getMonth(), df.getDate());
            var di = new Date(df.getFullYear(), df.getMonth(), dia);
            var tdi = new Date(ano, mes, dia);
            if ( di < df ) {
                var di = new Date(df.getFullYear(), df.getMonth()+1, dia);
            }
            total_dias = totaldifDate(tdi, df);
            dias = difDate(di, df);
            if( total_dias == '' && dias == 0){
                return 'Falta 1 mês';
            }

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

        var resultadoAno = function() {
            var niver = localStorage.getItem('niver');
            data = niver.split('/');
            dia = data[0];
            mes = data[1];
            ano = data[2];
            var df = new Date();
            var df = new Date(df.getFullYear(), df.getMonth(), df.getDate());
            var di = new Date(df.getFullYear(), df.getMonth(), dia);
            var tdi = new Date(ano, mes, dia);
            if ( di < df ) {
                var di = new Date(df.getFullYear(), df.getMonth()+1, dia);
            }
            total_dias = totaldifDate(tdi, df);
            dias = difDate(di, df);
            mes = quantidade_meses_que_faltam(tdi, df);

            if ( dias == 0 ) {
                if ( mes == 0) {
                    return '0';
                } else {
                    dias = "";
                }
            } else {
                mes -= 1;
                if ( dias == 1){
                    dias = dias + " dia";
                } else {
                    dias = dias + " dias";
                }
            }

            if ( mes == 0){
                mes = "";
            } else if ( mes == 1) {
                mes = mes + " mês ";
            } else {
                mes = mes + " meses ";
            }
            return "Faltam " + mes + dias;
        }