package com.dejotatur.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dejotatur.app.entities.Pacote;

@Repository
public interface PacoteRepository extends JpaRepository<Pacote, Long>{

}
