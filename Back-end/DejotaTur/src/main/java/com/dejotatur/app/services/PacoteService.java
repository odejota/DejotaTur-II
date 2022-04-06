package com.dejotatur.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dejotatur.app.entities.Pacote;
import com.dejotatur.app.repositories.PacoteRepository;

@Service
public class PacoteService {

	@Autowired
	private PacoteRepository pacDAO;
	
	@Transactional(readOnly = true)
	public List<Pacote> select(){
		return pacDAO.findAll();
	}
	
	@Transactional(readOnly = true)
	public Optional<Pacote> selectById(Long idPacote) {
		return pacDAO.findById(idPacote);
	}
	
	@Transactional(readOnly = false)
	public Pacote insert(Pacote pacote) {
		return pacDAO.save(pacote);
	}
	
	@Transactional(readOnly = false)
	public void update(Pacote pacote) {
		pacDAO.save(pacote);
	}
	
	@Transactional(readOnly = false)
	public void delete(Long idPacote) {
		pacDAO.deleteById(idPacote);
	}
}