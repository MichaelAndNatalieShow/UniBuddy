package backend.main.java.com.unibuddy.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.supabase.SupabaseClient;
import io.supabase.SupabaseClientBuilder;

@Configuration
public class SupabaseConfig {

    @Value("${SUPABASE_URL}")
    private String supabaseUrl;

    @Value("${SUPABASE_KEY}")
    private String supabaseKey;

    @Bean
    public SupabaseClient supabaseClient() {
        return new SupabaseClientBuilder()
                .url(supabaseUrl)
                .key(supabaseKey)
                .build();
    }
}
