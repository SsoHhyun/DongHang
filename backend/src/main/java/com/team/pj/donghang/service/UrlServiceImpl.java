package com.team.pj.donghang.service;

import com.team.pj.donghang.domain.dto.SurveyUrlDto;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.repository.SurveyTestUrlRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

@Service
public class UrlServiceImpl implements UrlService{
    @Autowired
    private SurveyTestUrlRepository surveyTestUrlRepository;

    @Autowired
    private RedisTemplate<String,Object> redisTemplate;
    private int length =20;
    private String baseUrl = "http://j7a504.p.ssafy.io/survey/key=?";

    //    private boolean useLetters = true;true
//    private boolean useNumbers = true;
    @Override
    public String generateUrl(User user) {
        String generate = RandomStringUtils.randomAlphabetic(length);

        StringBuilder builder = new StringBuilder();
        String key =builder.append(baseUrl).append(generate).toString();

        SurveyUrlDto surveyUrlDto =SurveyUrlDto.builder()
                .user(user)
                .id(key)
                .build();

        surveyTestUrlRepository.save(surveyUrlDto);

        return key;
    }

    @Override
    public boolean idUrlExist(String url) {
        return redisTemplate.hasKey(url);
    }

    @Override
    public void urlDelete(String url) {
        redisTemplate.delete(url);
    }

    @Override
    public User getUrlUser(String url) {
        SurveyUrlDto surveyUrlDto = surveyTestUrlRepository.findById(url).orElseGet(SurveyUrlDto::new);;
        if(surveyUrlDto.getUser()!=null){
            return surveyUrlDto.getUser();
        }else {
            return null;
        }
    }
}
