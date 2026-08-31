// Libro Mastro — configurazione della sincronizzazione.
//
// Finché questi due valori restano vuoti, l'app funziona benissimo in
// locale (offline, gratis): salva tutto nel browser del dispositivo, ma
// PC e cellulare NON si sincronizzano tra loro.
//
// Per attivare la sincronizzazione automatica: crea un progetto gratuito
// su supabase.com, vai su Project Settings → API e incolla qui sotto la
// "Project URL" e la chiave "anon public" (MAI la "service_role", quella
// è segreta e non va messa in un file pubblico come questo).
window.SUPABASE_URL = "";
window.SUPABASE_ANON_KEY = "";
