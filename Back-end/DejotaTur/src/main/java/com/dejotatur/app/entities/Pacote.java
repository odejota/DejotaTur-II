package com.dejotatur.app.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;

@Entity
public class Pacote {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdPacote;
//	@ManyToOne
//	@JoinColumn(name = "IdDest")
//	private Destino Destino;
	private String Destino, Pais, Aereo;
	private Integer Diarias;
	private Double Preco;
	private String PacoteImg;
	
	public Pacote() {
	}

	public Pacote(Long idPacote, Integer diarias, String aereo, Double preco, String pacoteImg, String destino, String pais) {
		this.IdPacote = idPacote;
		this.Diarias = diarias;
		this.Aereo = aereo;
		this.Preco = preco;
		this.PacoteImg = pacoteImg;
		this.Destino = destino;
		this.Pais = pais;
	}

	public Long getIdPacote() {
		return IdPacote;
	}

	public void setIdPacote(Long idPacote) {
		IdPacote = idPacote;
	}

//	public Destino getIdDest() {
//		//this.IdDest.getIdDestino();
//		return Destino;
//	}
//
//	public void setIdDest(Destino destino) {
//		this.Destino = destino;
//	}

	public Integer getDiarias() {
		return Diarias;
	}

	public void setDiarias(Integer diarias) {
		Diarias = diarias;
	}

	public String getAereo() {
		return Aereo;
	}

	public void setAereo(String aereo) {
		Aereo = aereo;
	}

	public Double getPreco() {
		return Preco;
	}

	public void setPreco(Double preco) {
		Preco = preco;
	}
	
	public String getPacoteImg() {
		return PacoteImg;
	}
	
	public void setPacoteImg(String pacoteImg) {
		PacoteImg = pacoteImg;
	}

	public String getDestino() {
		return Destino;
	}

	public void setDestino(String destino) {
		Destino = destino;
	}

	public String getPais() {
		return Pais;
	}

	public void setPais(String pais) {
		Pais = pais;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(IdPacote);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pacote other = (Pacote) obj;
		return Objects.equals(IdPacote, other.IdPacote);
	}
}