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

import com.dejotatur.app.entities.Destino;
import com.dejotatur.app.services.DestinoService;

@RestController
@RequestMapping("/destinos")
@CrossOrigin(origins = "http://localhost:3000")
public class DestinoController {

	@Autowired
	private DestinoService destService;
	
	@GetMapping
	public List<Destino> select(){
		return destService.select();
	}
	
	@GetMapping("/{idDestino}")
	public Destino selectById(@PathVariable Long idDestino) {
		return destService.selectById(idDestino).get();
	}
	
	@PostMapping("/cadastrarDestino")
	public Destino insert(@RequestBody Destino destino) {
		return destService.insert(destino);
	}
	
	@PutMapping("/editarDestino")
	public void update(@RequestBody Destino destino) {
		destService.update(destino);
	}
	
	@DeleteMapping("/{idDestino}")
	public void delete(@PathVariable Long idDestino) {
		destService.delete(idDestino);
	}
}