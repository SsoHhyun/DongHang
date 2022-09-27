package com.team.pj.donghang;

import com.team.pj.donghang.domain.dto.SurveyUrlDto;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.repository.SurveyTestUrlRepository;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

//import static jdk.nashorn.internal.runtimeOnlime.regexp.joni.Config.log;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class RedisTest {
    @Autowired
    private SurveyTestUrlRepository surveyTestUrlRepository;
    Logger logger =(Logger) LoggerFactory.getLogger(RedisTest.class);
//
//    @Autowired
//    UrlRepository urlRepository;
//    @Autowired
//    private UserRepository userRepository;

//    @Test
//    void save() {
//        urlRepository.save("5","test 5");
//    }
//
//    @Test
//    void find() {
//        String data = (String) urlRepository.find("1");
////        log.info("redis string  data = {}", data);
//    }
//
//    @Test
//    void delete() {
//        urlRepository.delete("5");
//    }
//
//    @Test
//    void saveHashType() {
//        urlRepository.saveHashType("test:hash:user","name","cj");
//        urlRepository.saveHashType("test:hash:user","age","100");
//
//    }
//
//    @Test
//    void saveSetType() {
//        urlRepository.saveSetType("test:user:set:hobby","책");
//        urlRepository.saveSetType("test:user:set:hobby","책1","책2");
//    }
//    출처: https://mycup.tistory.com/279 [IT.FARMER:티스토리]
    

    @Test
    void testSave(){
        User user = User.builder()
                .nickname("test")
                .userNo(1L)
                .email("test@test.com")
                .build();
        SurveyUrlDto surveyUrlDto = new SurveyUrlDto();
        surveyUrlDto.setId("test");
        surveyUrlDto.setUser(user);
        surveyTestUrlRepository.save(surveyUrlDto);
    }
    @Test
    void testfindById(){
        SurveyUrlDto surveyUrlDto = surveyTestUrlRepository.findById("test")
                .orElseGet(SurveyUrlDto::new);
        logger.debug("url = {}",surveyUrlDto);
    }
   
    

}
