#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Env, String, Symbol, symbol_short};

#[contracttype]
#[derive(Clone)]
pub struct Product {
    pub id: u64,
    pub name: String,
    pub description: String,
    pub price: u64,
}

#[contracttype]
pub enum ProductBook {
    Item(u64),
}

const PRODUCT_COUNT: Symbol = symbol_short!("P_COUNT");

#[contract]
pub struct MarketplaceContract;

#[contractimpl]
impl MarketplaceContract {
    pub fn add_product(env: Env, name: String, description: String, price: u64) -> u64 {
        let mut count = env.storage().instance().get(&PRODUCT_COUNT).unwrap_or(0);
        count += 1;

        let product = Product {
            id: count,
            name,
            description,
            price,
        };

        env.storage().instance().set(&ProductBook::Item(count), &product);
        env.storage().instance().set(&PRODUCT_COUNT, &count);

        count
    }

    pub fn get_product(env: Env, id: u64) -> Product {
        env.storage().instance().get(&ProductBook::Item(id)).unwrap_or(Product {
            id: 0,
            name: String::from_str(&env, "Not Found"),
            description: String::from_str(&env, "Not Found"),
            price: 0,
        })
    }

    pub fn total_products(env: Env) -> u64 {
        env.storage().instance().get(&PRODUCT_COUNT).unwrap_or(0)
    }
}
