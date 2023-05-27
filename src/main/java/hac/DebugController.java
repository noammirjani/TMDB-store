package hac;

import hac.repo.Purchase;
import hac.repo.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/**
 * DebugController
 * Controller class for handling HTTP requests related to purchases.
 */
@RestController
@RequestMapping("/debug")
public class DebugController {
    @Autowired
    private PurchaseRepository repository;  // this is the JPA repository (SQL database)

    /**
     * Retrieve all purchases from the database.
     *
     * @return List of Purchase objects representing all the purchases.
     */
    @GetMapping("/purchases")
    public List<Purchase> showPurchases() {
        return repository.findAll(); // this is a JPA method to get all the purchases
    }

    /**
     * Add a new purchase to the database.
     *
     * @param purchase The Purchase object to be saved.
     * @return The saved Purchase object.
     */
    @PostMapping("/purchases")
    public Purchase addPurchase(Purchase purchase) {
        return repository.save(purchase); // this is a JPA method to save a purchase to the database
    }
}
