create database dejotatur3;
use dejotatur3;

select * from destino;
select * from pacote;

insert into destino (aeroportos_iata, cidade, continente, pais) values ("NRT, HND", "Tóquio", "Ásia", "Japão");
insert into destino (aeroportos_iata, cidade, continente, pais) values ("MEX", "La Paz", "América Central", "México");
insert into pacote (aereo, destino, diarias, pacote_img, pais, preco) values ("Aéreo incluso", "La Paz", 7, "https://deih43ym53wif.cloudfront.net/balandra-beach-mexico-shutterstock_619641650_9e1a2ef751.jpeg", "México", 3989.90);
insert into pacote (aereo, destino, diarias, pacote_img, pais, preco) values ("Aéreo não incluso", "Tóquio", 7, "https://images.unsplash.com/photo-1522547902298-51566e4fb383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", "Japão", 5436.87);

-- delete from destino where id_destino = 1;
-- delete from pacote where id_pacote = 2;

-- drop table pacote;
-- drop table destino;