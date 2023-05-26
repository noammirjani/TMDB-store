package hac.controllers;

import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/purchase")
public class PurchaseController {
    private final PurchaseRepository purchaseRepository;

    @Autowired
    public PurchaseController(PurchaseRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }


    @PostMapping
    public ResponseEntity<Purchase> createPurchase(@Validated @RequestBody Purchase purchase) {
        Purchase createdPurchase = purchaseRepository.save(purchase);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPurchase);
    }




}
