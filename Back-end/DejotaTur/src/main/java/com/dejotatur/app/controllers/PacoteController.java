package com.dejotatur.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dejotatur.app.entities.Pacote;
import com.dejotatur.app.services.PacoteService;

@RestController
@RequestMapping("/pacotes")
@CrossOrigin(origins = "http://localhost:3000")
public class PacoteController {
	
	@Autowired
	private PacoteService pacService;
	
	@GetMapping
	public List<Pacote> select(){
		return pacService.select();
	}

	@GetMapping("/{idPacote}")
	public Pacote selectById(@PathVariable Long idPacote) {
		return pacService.selectById(idPacote).get();
	}
	
	@PostMapping("/cadastrarPacote")
	public Pacote insert(@RequestBody Pacote pacote) {
		return pacService.insert(pacote);
	}
	
	@PutMapping("/editarPacote")
	public void update(@RequestBody Pacote pacote) {
		pacService.update(pacote);
	}
	
	@DeleteMapping("/{idPacote}")
	public void delete(@PathVariable Long idPacote) {
		pacService.delete(idPacote);
	}
}