package com.dejotatur.app.entities;

//import java.util.ArrayList;
//import java.util.List;
import java.util.Objects;

//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
//import javax.persistence.PrimaryKeyJoinColumn;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Destino {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdDestino;
	private String Cidade, Pais, Continente, Aeroportos_IATA;

//	@PrimaryKeyJoinColumn
//	@JsonIgnore
//	@OneToMany(mappedBy = "Destino", cascade = CascadeType.ALL)
//	private List<Pacote> pacotes = new ArrayList<>();
	
	public Destino() {
	}

	public Destino(Long idDestino, String cidade, String pais, String continente, String aeroportos_IATA) {
		this.IdDestino = idDestino;
		this.Cidade = cidade;
		this.Pais = pais;
		this.Continente = continente;
		this.Aeroportos_IATA = aeroportos_IATA;
	}

	public Long getIdDestino() {
		return IdDestino;
	}

	public void setIdDestino(Long idDestino) {
		IdDestino = idDestino;
	}

	public String getCidade() {
		return Cidade;
	}

	public void setCidade(String cidade) {
		Cidade = cidade;
	}

	public String getPais() {
		return Pais;
	}

	public void setPais(String pais) {
		Pais = pais;
	}

	public String getContinente() {
		return Continente;
	}

	public void setContinente(String continente) {
		Continente = continente;
	}

	public String getAeroportos_IATA() {
		return Aeroportos_IATA;
	}

	public void setAeroportos_IATA(String aeroportos_IATA) {
		Aeroportos_IATA = aeroportos_IATA;
	}

//	public List<Pacote> getPacotes() {
//		return pacotes;
//	}
//
//	public void setPacotes(List<Pacote> pacotes) {
//		this.pacotes = pacotes;
//	}

	@Override
	public int hashCode() {
		return Objects.hash(IdDestino);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return Objects.equals(IdDestino, other.IdDestino);
	}
}