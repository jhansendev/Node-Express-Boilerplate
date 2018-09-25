import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../../knexfile';

// Initialize knex
const knex = Knex(knexConfig);

// Bind all models to knex instance
Model.knex(knex);

exports = { knex, Model };
