package com.dejotatur.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dejotatur.app.entities.Destino;

@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long> {

}