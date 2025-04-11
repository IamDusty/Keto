// DOM Elements
const searchInput = document.getElementById('food-search');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Food Database
const foodDatabase = [
    {
        name: "Avocado",
        isKeto: true,
        ketoType: "keto",
        description: "Perfect keto food rich in healthy fats and low in carbs.",
        carbs: 2,
        fat: 15,
        protein: 2,
        servingSize: "1/2 medium avocado"
    },
    {
        name: "Eggs",
        isKeto: true,
        ketoType: "keto",
        description: "Excellent source of protein and healthy fats with minimal carbs.",
        carbs: 0.6,
        fat: 5,
        protein: 6,
        servingSize: "1 large egg"
    },
    {
        name: "Chicken Breast",
        isKeto: true,
        ketoType: "keto",
        description: "High in protein with no carbs, great for keto meals.",
        carbs: 0,
        fat: 3,
        protein: 31,
        servingSize: "100g cooked"
    },
    {
        name: "Salmon",
        isKeto: true,
        ketoType: "keto",
        description: "Rich in omega-3 fatty acids and protein with zero carbs.",
        carbs: 0,
        fat: 13,
        protein: 22,
        servingSize: "100g cooked"
    },
    {
        name: "Butter",
        isKeto: true,
        ketoType: "keto",
        description: "High-fat dairy product with virtually no carbs.",
        carbs: 0.1,
        fat: 11,
        protein: 0.1,
        servingSize: "1 tablespoon"
    },
    {
        name: "Coconut Oil",
        isKeto: true,
        ketoType: "keto",
        description: "Pure fat source with MCTs that can promote ketosis.",
        carbs: 0,
        fat: 14,
        protein: 0,
        servingSize: "1 tablespoon"
    },
    {
        name: "Spinach",
        isKeto: true,
        ketoType: "keto",
        description: "Low-carb leafy green vegetable rich in nutrients.",
        carbs: 1,
        fat: 0.1,
        protein: 0.9,
        servingSize: "1 cup raw"
    },
    {
        name: "Broccoli",
        isKeto: true,
        ketoType: "keto",
        description: "Nutritious low-carb vegetable suitable for keto.",
        carbs: 3.7,
        fat: 0.3,
        protein: 2.6,
        servingSize: "1 cup raw"
    },
    {
        name: "Beef (Ground, 80/20)",
        isKeto: true,
        ketoType: "keto",
        description: "Good balance of fat and protein with no carbs.",
        carbs: 0,
        fat: 16,
        protein: 20,
        servingSize: "100g cooked"
    },
    {
        name: "Cheddar Cheese",
        isKeto: true,
        ketoType: "keto",
        description: "High in fat and protein with minimal carbs.",
        carbs: 0.4,
        fat: 9,
        protein: 7,
        servingSize: "28g (1 oz)"
    },
    {
        name: "Olive Oil",
        isKeto: true,
        ketoType: "keto",
        description: "Healthy fat source with zero carbs.",
        carbs: 0,
        fat: 14,
        protein: 0,
        servingSize: "1 tablespoon"
    },
    {
        name: "Almonds",
        isKeto: true,
        ketoType: "keto",
        description: "Low-carb nuts high in healthy fats and fiber.",
        carbs: 2.2,
        fat: 14,
        protein: 6,
        servingSize: "28g (1 oz)"
    },
    {
        name: "Berries (Mixed)",
        isKeto: true,
        ketoType: "keto-limit",
        description: "Can be consumed in small amounts on keto but watch portion size.",
        carbs: 8,
        fat: 0.5,
        protein: 0.7,
        servingSize: "1/4 cup"
    },
    {
        name: "Greek Yogurt (Full Fat)",
        isKeto: true,
        ketoType: "keto-limit",
        description: "Moderate carbs, consume in limited quantities on keto.",
        carbs: 5,
        fat: 5,
        protein: 9,
        servingSize: "100g"
    },
    {
        name: "Onions",
        isKeto: true,
        ketoType: "keto-limit",
        description: "Use sparingly on keto due to higher carb content.",
        carbs: 7,
        fat: 0.1,
        protein: 0.9,
        servingSize: "1/2 cup chopped"
    },
    {
        name: "Cream Cheese",
        isKeto: true,
        ketoType: "keto",
        description: "High in fat with moderate protein and low carbs.",
        carbs: 1.6,
        fat: 10,
        protein: 2,
        servingSize: "28g (1 oz)"
    },
    {
        name: "Bread (White)",
        isKeto: false,
        ketoType: "not-keto",
        description: "High in carbs and should be avoided on the keto diet.",
        carbs: 15,
        fat: 1,
        protein: 2,
        servingSize: "1 slice",
        alternatives: [
            {
                name: "Almond Flour Bread",
                description: "Made with almond flour instead of wheat flour, much lower in carbs.",
                carbs: 3,
                servingSize: "1 slice"
            },
            {
                name: "Coconut Flour Bread",
                description: "Uses coconut flour as a low-carb alternative to wheat flour.",
                carbs: 4,
                servingSize: "1 slice"
            },
            {
                name: "Flaxseed Bread",
                description: "High in fiber and healthy fats, very low in net carbs.",
                carbs: 1.5,
                servingSize: "1 slice"
            },
            {
                name: "Cloud Bread",
                description: "Made from eggs and cream cheese, virtually zero carbs.",
                carbs: 0.5,
                servingSize: "1 piece"
            }
        ]
    },
    {
        name: "Rice",
        isKeto: false,
        ketoType: "not-keto",
        description: "High-carb grain that is not suitable for keto.",
        carbs: 45,
        fat: 0.4,
        protein: 4,
        servingSize: "1 cup cooked",
        alternatives: [
            {
                name: "Cauliflower Rice",
                description: "Riced cauliflower that mimics the texture of rice with fraction of the carbs.",
                carbs: 3,
                servingSize: "1 cup"
            },
            {
                name: "Broccoli Rice",
                description: "Similar to cauliflower rice but with broccoli florets.",
                carbs: 4,
                servingSize: "1 cup"
            },
            {
                name: "Shirataki Rice",
                description: "Made from konjac root, contains almost no digestible carbs.",
                carbs: 1,
                servingSize: "1 cup"
            },
            {
                name: "Cabbage Rice",
                description: "Finely chopped cabbage as a rice alternative.",
                carbs: 3.5,
                servingSize: "1 cup"
            }
        ]
    },
    {
        name: "Potatoes",
        isKeto: false,
        ketoType: "not-keto",
        description: "Starchy vegetable with high carb content, not keto-friendly.",
        carbs: 37,
        fat: 0.2,
        protein: 4.3,
        servingSize: "1 medium",
        alternatives: [
            {
                name: "Mashed Cauliflower",
                description: "Creamy texture similar to mashed potatoes but low in carbs.",
                carbs: 4,
                servingSize: "1 cup"
            },
            {
                name: "Turnips",
                description: "Can be roasted or mashed as a potato substitute.",
                carbs: 6,
                servingSize: "1 cup"
            },
            {
                name: "Radishes",
                description: "When roasted, they have a potato-like texture with fewer carbs.",
                carbs: 2,
                servingSize: "1 cup"
            },
            {
                name: "Rutabaga",
                description: "Makes good fries and roasted sides with lower carb content.",
                carbs: 9,
                servingSize: "1 cup"
            }
        ]
    },
    {
        name: "Banana",
        isKeto: false,
        ketoType: "not-keto",
        description: "High in carbs and sugars, not recommended for keto.",
        carbs: 27,
        fat: 0.4,
        protein: 1.3,
        servingSize: "1 medium",
        alternatives: [
            {
                name: "Avocado",
                description: "Creamy texture that works well in smoothies with very low carbs.",
                carbs: 2,
                servingSize: "1/2 medium"
            },
            {
                name: "Berries",
                description: "Lower carb fruit option, use sparingly.",
                carbs: 6,
                servingSize: "1/4 cup"
            },
            {
                name: "Zucchini",
                description: "Works surprisingly well in keto-friendly sweet breads.",
                carbs: 3,
                servingSize: "1 medium"
            }
        ]
    },
    {
        name: "Pasta",
        isKeto: false,
        ketoType: "not-keto",
        description: "Made from wheat and very high in carbs, avoid on keto.",
        carbs: 43,
        fat: 1.3,
        protein: 7.2,
        servingSize: "1 cup cooked",
        alternatives: [
            {
                name: "Zucchini Noodles (Zoodles)",
                description: "Spiralized zucchini that mimics pasta texture.",
                carbs: 3,
                servingSize: "1 cup"
            },
            {
                name: "Shirataki Noodles",
                description: "Made from glucomannan fiber, nearly zero carbs.",
                carbs: 0.5,
                servingSize: "1 cup"
            },
            {
                name: "Spaghetti Squash",
                description: "When cooked, the flesh separates into spaghetti-like strands.",
                carbs: 7,
                servingSize: "1 cup"
            },
            {
                name: "Hearts of Palm Pasta",
                description: "Made from palm hearts, low in carbs and similar texture to pasta.",
                carbs: 4,
                servingSize: "1 cup"
            },
            {
                name: "Almond Flour Pasta",
                description: "Homemade pasta using almond flour instead of wheat.",
                carbs: 7,
                servingSize: "1 cup"
            }
        ]
    },
    {
        name: "Beans",
        isKeto: false,
        ketoType: "not-keto",
        description: "Legumes are too high in carbs for the keto diet.",
        carbs: 40,
        fat: 0.9,
        protein: 15,
        servingSize: "1 cup cooked",
        alternatives: [
            {
                name: "Edamame",
                description: "Lower in carbs than other legumes, use in small amounts.",
                carbs: 10,
                servingSize: "1/2 cup"
            },
            {
                name: "Black Soybeans",
                description: "One of the lowest carb beans available.",
                carbs: 8,
                servingSize: "1/2 cup"
            },
            {
                name: "Ground Meat",
                description: "For chili and similar dishes, just use more ground meat instead of beans.",
                carbs: 0,
                servingSize: "1 cup"
            }
        ]
    },
    {
        name: "Candy",
        isKeto: false,
        ketoType: "not-keto",
        description: "Pure sugar with no nutritional value, definitely not keto.",
        carbs: 25,
        fat: 0,
        protein: 0,
        servingSize: "1 oz",
        alternatives: [
            {
                name: "Dark Chocolate (85%+)",
                description: "Small amounts of very dark chocolate can fit into keto macros.",
                carbs: 3,
                servingSize: "1 square (10g)"
            },
            {
                name: "Sugar-Free Chocolate",
                description: "Made with sugar alcohols or stevia instead of sugar.",
                carbs: 1,
                servingSize: "1 oz"
            },
            {
                name: "Fat Bombs",
                description: "Homemade treats high in fat and low in carbs.",
                carbs: 1,
                servingSize: "1 piece"
            },
            {
                name: "Keto Gummies",
                description: "Made with gelatin and sugar-free sweeteners.",
                carbs: 0.5,
                servingSize: "1 oz"
            }
        ]
    },
    {
        name: "Soda",
        isKeto: false,
        ketoType: "not-keto",
        description: "High in sugar and carbs with no nutritional benefits.",
        carbs: 39,
        fat: 0,
        protein: 0,
        servingSize: "12 oz can",
        alternatives: [
            {
                name: "Diet Soda",
                description: "Zero carbs but watch for artificial sweeteners.",
                carbs: 0,
                servingSize: "12 oz can"
            },
            {
                name: "Sparkling Water",
                description: "Carbonated water with natural flavors and no sweeteners.",
                carbs: 0,
                servingSize: "12 oz"
            },
            {
                name: "Keto-Friendly Electrolyte Drinks",
                description: "Hydration with electrolytes and no sugar.",
                carbs: 0,
                servingSize: "12 oz"
            },
            {
                name: "Unsweetened Iced Tea",
                description: "Zero carbs and can be flavored with lemon or stevia.",
                carbs: 0,
                servingSize: "12 oz"
            }
        ]
    },
    {
        name: "Fruit Juice",
        isKeto: false,
        ketoType: "not-keto",
        description: "Contains concentrated fruit sugars with high carb content.",
        carbs: 26,
        fat: 0.2,
        protein: 0.5,
        servingSize: "8 oz",
        alternatives: [
            {
                name: "Water with Lemon/Lime",
                description: "Refreshing with minimal carbs.",
                carbs: 0.5,
                servingSize: "8 oz"
            },
            {
                name: "Sugar-Free Water Enhancers",
                description: "Adds flavor without carbs.",
                carbs: 0,
                servingSize: "8 oz"
            },
            {
                name: "Herbal Tea",
                description: "Can be served hot or cold with no carbs.",
                carbs: 0,
                servingSize: "8 oz"
            }
        ]
    },
    {
        name: "Beer",
        isKeto: false,
        ketoType: "not-keto",
        description: "Made from grains with significant carb content.",
        carbs: 13,
        fat: 0,
        protein: 1.6,
        servingSize: "12 oz",
        alternatives: [
            {
                name: "Dry Red or White Wine",
                description: "Lower in carbs than beer, limit to 4-5 oz.",
                carbs: 4,
                servingSize: "5 oz glass"
            },
            {
                name: "Hard Liquor",
                description: "Vodka, whiskey, rum, gin, and tequila have zero carbs.",
                carbs: 0,
                servingSize: "1.5 oz shot"
            },
            {
                name: "Low-Carb Beer",
                description: "Specially brewed beers with fewer carbs.",
                carbs: 2,
                servingSize: "12 oz"
            },
            {
                name: "Hard Seltzer",
                description: "Flavored alcoholic sparkling water, usually low in carbs.",
                carbs: 2,
                servingSize: "12 oz"
            }
        ]
    },
    {
        name: "Honey",
        isKeto: false,
        ketoType: "not-keto",
        description: "Natural but very high in sugar and carbs.",
        carbs: 17,
        fat: 0,
        protein: 0.1,
        servingSize: "1 tablespoon",
        alternatives: [
            {
                name: "Stevia",
                description: "Natural zero-carb sweetener from the stevia plant.",
                carbs: 0,
                servingSize: "1 tsp"
            },
            {
                name: "Erythritol",
                description: "Sugar alcohol with zero net carbs.",
                carbs: 0,
                servingSize: "1 tbsp"
            },
            {
                name: "Monk Fruit Sweetener",
                description: "Natural zero-carb sweetener with no aftertaste.",
                carbs: 0,
                servingSize: "1 tsp"
            },
            {
                name: "Allulose",
                description: "Rare sugar with minimal impact on blood sugar.",
                carbs: 0,
                servingSize: "1 tbsp"
            }
        ]
    },
    {
        name: "Milk",
        isKeto: false,
        ketoType: "not-keto",
        description: "Contains lactose (milk sugar) which adds too many carbs.",
        carbs: 12,
        fat: 8,
        protein: 8,
        servingSize: "1 cup",
        alternatives: [
            {
                name: "Unsweetened Almond Milk",
                description: "Very low in carbs and calories.",
                carbs: 1,
                servingSize: "1 cup"
            },
            {
                name: "Coconut Milk",
                description: "High in fat and low in carbs.",
                carbs: 2,
                servingSize: "1 cup"
            },
            {
                name: "Heavy Cream",
                description: "High in fat with minimal carbs, dilute with water if needed.",
                carbs: 0.5,
                servingSize: "1/4 cup"
            },
            {
                name: "Macadamia Nut Milk",
                description: "Creamy texture with very low carbs.",
                carbs: 1,
                servingSize: "1 cup"
            }
        ]
    },
    {
        name: "Apple",
        isKeto: false,
        ketoType: "not-keto",
        description: "Too high in carbs and sugar for the keto diet.",
        carbs: 25,
        fat: 0.3,
        protein: 0.5,
        servingSize: "1 medium",
        alternatives: [
            {
                name: "Strawberries",
                description: "Lower in carbs than most fruits.",
                carbs: 6,
                servingSize: "1/2 cup"
            },
            {
                name: "Raspberries",
                description: "High in fiber which reduces net carbs.",
                carbs: 3.5,
                servingSize: "1/2 cup"
            },
            {
                name: "Star Fruit",
                description: "Unusual but lower carb option.",
                carbs: 4,
                servingSize: "1 medium"
            }
        ]
    },
    {
        name: "Tomatoes",
        isKeto: true,
        ketoType: "keto-limit",
        description: "Can be used on keto in moderation due to moderate carb content.",
        carbs: 4.8,
        fat: 0.2,
        protein: 1,
        servingSize: "1 medium"
    },
    {
        name: "Dark Chocolate (85%+ cocoa)",
        isKeto: true,
        ketoType: "keto-limit",
        description: "High cocoa content dark chocolate can be consumed in small amounts.",
        carbs: 8,
        fat: 12,
        protein: 2,
        servingSize: "1 oz (28g)"
    },
    {
        name: "Peanut Butter (Natural)",
        isKeto: true,
        ketoType: "keto-limit",
        description: "Good fat content but moderate carbs, use in limited quantities.",
        carbs: 4,
        fat: 16,
        protein: 8,
        servingSize: "2 tablespoons"
    }
];

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add live search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Keep button functionality as well
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
});

// Functions
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        // When empty, show initial state instead of error
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-utensils" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                <h3>Search for a food item above</h3>
                <p>Find out if your favorite foods are keto-friendly</p>
            </div>
        `;
        return;
    }
    
    const matchingFoods = foodDatabase.filter(food => 
        food.name.toLowerCase().includes(searchTerm)
    );
    
    if (matchingFoods.length === 0) {
        displayNoResults(`No results found for "${searchTerm}"`);
    } else {
        displaySearchResults(matchingFoods);
    }
}

function displaySearchResults(foods) {
    searchResults.innerHTML = '';
    
    foods.forEach(food => {
        const foodElement = document.createElement('div');
        foodElement.className = 'food-item';
        
        let statusIcon, statusClass;
        
        if (food.ketoType === 'keto') {
            statusIcon = 'fa-check';
            statusClass = 'keto';
        } else if (food.ketoType === 'not-keto') {
            statusIcon = 'fa-times';
            statusClass = 'not-keto';
        } else if (food.ketoType === 'keto-limit') {
            statusIcon = 'fa-exclamation';
            statusClass = 'keto-limit';
        }
        
        let alternativesHTML = '';
        if (food.alternatives && food.alternatives.length > 0) {
            alternativesHTML = `
                <div class="alternatives">
                    <h4><i class="fas fa-exchange-alt"></i> Keto-Friendly Alternatives</h4>
                    <ul class="alternatives-list">
                        ${food.alternatives.map(alt => `
                            <li>
                                <strong>${alt.name}</strong> (${alt.carbs}g carbs per ${alt.servingSize}) - 
                                ${alt.description}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }
        
        foodElement.innerHTML = `
            <div class="food-status ${statusClass}">
                <i class="fas ${statusIcon}"></i>
            </div>
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <div class="food-details">
                    <span class="detail">Carbs: ${food.carbs}g</span>
                    <span class="detail">Fat: ${food.fat}g</span>
                    <span class="detail">Protein: ${food.protein}g</span>
                    <span class="detail">Serving: ${food.servingSize}</span>
                </div>
                ${alternativesHTML}
            </div>
        `;
        
        searchResults.appendChild(foodElement);
    });
    
    // Only scroll to results when button is clicked, not during live typing
    if (document.activeElement === searchBtn) {
        searchResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function displayNoResults(message) {
    searchResults.innerHTML = `
        <div class="no-results">
            <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
            <h3>${message}</h3>
            <p>Try searching for another food item or check the common foods section below.</p>
        </div>
    `;
}

function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '0';
        navLinks.style.left = '0';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
        navLinks.style.zIndex = '99';
    } else {
        navLinks.style.display = 'none';
    }
}

// Initialize with an empty search results area
searchResults.innerHTML = `
    <div class="no-results">
        <i class="fas fa-utensils" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
        <h3>Search for a food item above</h3>
        <p>Find out if your favorite foods are keto-friendly</p>
    </div>
`;