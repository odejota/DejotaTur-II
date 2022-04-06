package com.dejotatur.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dejotatur.app.entities.Destino;
import com.dejotatur.app.repositories.DestinoRepository;

@Service
public class DestinoService {
	
	@Autowired
	private DestinoRepository destDAO;

	@Transactional(readOnly = true)
	public List<Destino> select() {
		return destDAO.findAll();
	}
	
	@Transactional(readOnly = true)
	public Optional<Destino> selectById(Long idDestino) {
		return destDAO.findById(idDestino);
	}
	
	@Transactional(readOnly = false)
	public Destino insert(Destino destino) {
		return destDAO.save(destino);
	}
	
	@Transactional(readOnly = false)
	public void update(Destino destino) {
		destDAO.save(destino);
	}
	
	@Transactional(readOnly = false)
	public void delete(Long idDestino) {
		destDAO.deleteById(idDestino);
	}
}